/**
 * MiniMax API Wrappers
 * 
 * This module provides TypeScript wrappers for the MiniMax API,
 * enabling easy integration with text generation and media creation capabilities.
 */

interface MinimaxConfig {
  apiKey: string;
  baseUrl?: string;
}

interface TextGenerationRequest {
  prompt: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  stream?: boolean;
}

interface TextGenerationResponse {
  choices: Array<{
    text: string;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

interface MediaGenerationRequest {
  prompt: string;
  type: 'image' | 'video' | 'audio';
  width?: number;
  height?: number;
  duration?: number;
  quality?: 'low' | 'medium' | 'high';
}

interface MediaGenerationResponse {
  url: string;
  type: string;
  status: 'completed' | 'processing' | 'failed';
  metadata: {
    width?: number;
    height?: number;
    duration?: number;
    size: number;
  };
}

class MinimaxClient {
  private config: MinimaxConfig;

  constructor(config: MinimaxConfig) {
    this.config = {
      baseUrl: 'https://api.minimax.chat',
      ...config
    };
  }

  private async makeRequest<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`MiniMax API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Generate text using MiniMax text generation API
   */
  async generateText(request: TextGenerationRequest): Promise<TextGenerationResponse> {
    return this.makeRequest<TextGenerationResponse>('/v1/text/generation', {
      model: request.model || 'abab6.5s-chat',
      prompt: request.prompt,
      max_tokens: request.maxTokens || 1000,
      temperature: request.temperature || 0.9,
      top_p: request.topP || 0.8,
      stream: request.stream || false,
    });
  }

  /**
   * Generate media (images, videos, audio) using MiniMax media API
   */
  async generateMedia(request: MediaGenerationRequest): Promise<MediaGenerationResponse> {
    const endpoint = request.type === 'image' ? '/v1/image/generation' :
                    request.type === 'video' ? '/v1/video/generation' :
                    '/v1/audio/generation';

    return this.makeRequest<MediaGenerationResponse>(endpoint, {
      prompt: request.prompt,
      width: request.width || 512,
      height: request.height || 512,
      duration: request.duration || 10,
      quality: request.quality || 'medium',
    });
  }

  /**
   * Generate a plan using MiniMax planning capabilities
   */
  async mmPlan(prompt: string): Promise<string> {
    const response = await this.generateText({
      prompt: `Create a detailed plan for: ${prompt}`,
      model: 'abab6.5s-chat',
      maxTokens: 2000,
      temperature: 0.7,
    });
    
    return response.choices[0]?.text || '';
  }
}

// Export default client instance
const minimax = new MinimaxClient({
  apiKey: process.env.MINIMAX_API_KEY || '',
  baseUrl: process.env.MINIMAX_BASE_URL,
});

export default minimax;
export { MinimaxClient, type TextGenerationRequest, type MediaGenerationRequest };
export { mmPlan } from './minimax';

// Helper function for mmPlan
export async function mmPlan(prompt: string): Promise<string> {
  return minimax.mmPlan(prompt);
}
