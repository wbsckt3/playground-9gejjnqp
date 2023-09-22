function getNestedRecordsExample() {
  return [
    {
      id: 1,
      name: 'Record 1',
      details: {
        description: 'Details for Record 1',
        nestedInfo: {
          value: 'Value for Record 1',
        },
      },
    },
    {
      id: 2,
      name: 'Record 2',
      details: {
        description: 'Details for Record 2',
        nestedInfo: {
          value: 'Value for Record 2',
        },
      },
    },
    {
      id: 3,
      name: 'Record 3',
      details: {
        description: 'Details for Record 3',
        nestedInfo: {
          value: 'Value for Record 3',
        },
      },
    },
  ];
}

function getNestedInfo(recordId) {
  const records = getNestedRecordsExample();
  const record = records.find((r) => r.id === recordId);
  
  if (record) {
    return record.details.nestedInfo;
  } else {
    return null;
  }
}

// Ejemplo de uso
// const recordId = 2;
// const nestedInfo = getNestedInfo(recordId);
// console.log(nestedInfo);

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
