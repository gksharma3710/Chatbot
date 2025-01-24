export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface CDPDoc {
  platform: string;
  content: string;
  url: string;
}

export const cdpDocs: CDPDoc[] = [
  {
    platform: 'Segment',
    content: `
      Setting up a new source in Segment:
      1. Go to Connections > Sources
      2. Click 'Add Source'
      3. Choose your source type
      4. Configure the source settings
      5. Add the source name and tracking ID
    `,
    url: 'https://segment.com/docs/?ref=nav'
  },
  {
    platform: 'mParticle',
    content: `
      Creating a user profile in mParticle:
      1. Navigate to User Profiles
      2. Click 'Create Profile'
      3. Enter user attributes
      4. Set identity details
      5. Save the profile
    `,
    url: 'https://docs.mparticle.com/'
  },
  {
    platform: 'Lytics',
    content: `
      Building an audience segment in Lytics:
      1. Access Audience Builder
      2. Define segment criteria
      3. Set behavioral rules
      4. Add filters
      5. Save and activate
    `,
    url: 'https://docs.lytics.com/'
  },
  {
    platform: 'Zeotap',
    content: `
      Integrating data with Zeotap:
      1. Open Data Integration
      2. Select data source
      3. Configure connection
      4. Map data fields
      5. Test and activate
    `,
    url: 'https://docs.zeotap.com/home/en-us/'
  }
];