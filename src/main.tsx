// Learn more at developers.reddit.com/docs
import { Devvit } from '@devvit/public-api';

Devvit.configure({
  redditAPI: true,
});

Devvit.addTrigger({
  event: 'PostSubmit', // Event name from above
  onEvent: async (event) => {
    console.log(`Received OnPostSubmit event:\n${JSON.stringify(event)}`);
  },
});

export default Devvit;
