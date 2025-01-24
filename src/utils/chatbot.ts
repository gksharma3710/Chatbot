import { CDPDoc, cdpDocs } from '../types';

export function findRelevantDoc(question: string): CDPDoc | null {
  // Convert question to lowercase for case-insensitive matching
  const lowerQuestion = question.toLowerCase();
  
  // Check if question is CDP related
  const cdpKeywords = ['segment', 'mparticle', 'lytics', 'zeotap', 'cdp', 'source', 'profile', 'audience'];
  const isCDPRelated = cdpKeywords.some(keyword => lowerQuestion.includes(keyword));
  
  if (!isCDPRelated) {
    return null;
  }

  // Find most relevant CDP doc based on keyword matching
  let bestMatch: CDPDoc | null = null;
  let maxScore = 0;

  cdpDocs.forEach(doc => {
    let score = 0;
    const content = doc.content.toLowerCase();
    
    // Score based on platform name mention
    if (lowerQuestion.includes(doc.platform.toLowerCase())) {
      score += 5;
    }
    
    // Score based on content relevance
    const words = lowerQuestion.split(' ');
    words.forEach(word => {
      if (content.includes(word)) {
        score += 1;
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = doc;
    }
  });

  return bestMatch;
}

export function generateResponse(question: string): string {
  const doc = findRelevantDoc(question);
  
  if (!doc) {
    return "I can only answer questions related to CDP platforms (Segment, mParticle, Lytics, and Zeotap). Please ask a CDP-related question.";
  }

  return `Here's how to do that in ${doc.platform}:\n\n${doc.content}\n\nFor more details, visit: ${doc.url}`;
}