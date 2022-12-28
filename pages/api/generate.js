import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Let's think step by step. Answer the math problem below and explain with words how you got it with numbered steps. Make sure to simplify the answer and create a newline at the bottom with only the answer. In addition, create a newline under the answer with an exmaple problem titled "example problem" similar to the inputted problem.`;
const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 1000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
