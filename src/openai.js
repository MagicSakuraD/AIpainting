import { Configuration, OpenAIApi } from "openai";


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "your api key",
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 2,
  size: "1024x1024",
});
