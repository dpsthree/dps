import { https } from 'firebase-functions';
import * as faker from 'faker';
import * as _ from 'lodash';

export { demoUsers } from './faqs';

const colorList = [
  '#1565c0',
  '#5e92f3',
  '#003c8f',
  '#e91e63',
  '#ff6090',
  '#b0003a',
];

export const graphEntities = https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set('Access-Control-Allow-Origin', '*');
  if (req.body && req.body.count) {
    const count = req.body.count;
    if (count >= 0 && count <= 5000) {
      res.send(generatedData(count));
    } else {
      res.send(generatedData(500));
    }
  } else {
    res.send(generatedData(1000));
  }
});

// use faker to create count random people
// associate them with a color and add to list
function generatedData(count: number) {
  const entities = [];
  for (let i = 0; i < count; i++) {
    entities.push({
      displayName: faker.name.findName(),
      index: i,
      color: colorList[Math.floor(Math.random() * 6)],
    });
  }

  // For each entity, make sure that they have a relationship.
  // That relationship can not be to themselves and cannot
  // equal to a relationships that was previously generated
  const relationships = [];
  for (let i = 0; i < count; i++) {
    let found = false;

    const source = entities[i];
    let target: {
      displayName: string;
      index: number;
      color: string;
    };
    do {
      target = entities[Math.floor(Math.random() * count)];
      found = !!_.find(relationships, (link) => {
        return (
          (link.source === source.displayName &&
            link.target === target.displayName) ||
          (link.source === target.displayName &&
            link.target === source.displayName) ||
          source === target
        );
      });
    } while (found);
    relationships.push({
      source: source.displayName,
      target: target.displayName,
    });
  }
  return { entities, relationships };
}
