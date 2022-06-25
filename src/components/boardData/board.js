export const boards = [
  {
    id: Date.now() + Math.random() * 2,
    title: "to do",
    cards: [
      {
        id: Date.now() + Math.random(),
        title:"change button color",
        task:[],
        labels:[
            {
                text:"frontend",
                color:'green'
            }
        ],
        desc:'',
        date:""
      },
      {
        id: Date.now() + Math.random() * 2,
        title:"add date function",
        task:[],
        labels:[
            {
                text:"frontend",
                color:'green'
            },
            {
                text:"urgent",
                color:'magenta'
            }
        ],
        desc:'',
        date:""
      },




    ],
  },
];