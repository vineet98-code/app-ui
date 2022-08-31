// eslint-disable-next-line import/no-anonymous-default-export
export default [
    
   {
      id: '1',
      type: 'input',
      // you can also pass a React component as a label
      data: { label: <div>Source</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '2',
      type: 'output',
      data: { label: 'Destination' },
      position: { x: 250, y: 250 },
    },
  ];
  