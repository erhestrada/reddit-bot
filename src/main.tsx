// Learn more at developers.reddit.com/docs
import { Devvit } from '@devvit/public-api';

Devvit.configure({
  redditAPI: true,
});

function isTwitchClip(url: string) {
  if (url.includes("twitch.tv") || url.includes("clips.twitch.tv")) {
    return true
  } else {
    return false
  }
}

function isYoutubeClip(url: string) {

}

function isKickClip(url: string) {

}

Devvit.addTrigger({
  event: 'PostSubmit', // Event name from above
  onEvent: async (event) => {
    //console.log(`Received OnPostSubmit event:\n${JSON.stringify(event)}`);
    const eventData = JSON.parse(JSON.stringify(event));
    const url = eventData.post.url;
    console.log(`Post URL: ${url}`);
  },
});

export default Devvit;
