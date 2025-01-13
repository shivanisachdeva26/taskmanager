
import express from "express";
const app = express();
app.use(express.json());
app.get('/api/actions', (req, res) => {
  try {
    const action = [
      { 
        id: 1,
        InputColumn: { "date":"Oct 12","year":"2024","time":"14:08"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 2,
        InputColumn: { "date":"Oct 13","year":"2022","time":"12:08"},
        ActionColumn: "Loading...",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 3,
        InputColumn: { "date":"Oct 11","year":"2024","time":"14:08"},
        ActionColumn: "Loading..",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 4,
        InputColumn: { "date":"Oct 12","year":"2024","time":"14:08"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 5,
        InputColumn: { "date":"Sep 17","year":"2023","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 6,
        InputColumn: { "date":"Sep 17","year":"2023","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 7,
        InputColumn: { "date":"Sep 17","year":"2023","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 8,
        InputColumn: { "date":"Sep 17","year":"2019","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 9,
        InputColumn: { "date":"Sep 27","year":"2020","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 10,
        InputColumn: { "date":"Sep 17","year":"2023","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 11,
        InputColumn: { "date":"Apr 17","year":"2023","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 12,
        InputColumn: { "date":"Sep 17","year":"2023","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
      {
        id: 13,
        InputColumn: { "date":"Sep 17","year":"2023","time":"14:30"},
        ActionColumn: "Bitscale Evaluation",
        EnrichCompany: "Bitscale Evaluation"
      },
    ];
    res.send(action);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
})





