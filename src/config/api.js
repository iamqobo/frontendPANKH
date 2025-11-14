// API Configuration
// Change this to your production API URL when deploying
const API_BASE_URL = import.meta.env.VITE_API_URL ;

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  UDAAN_TALK: `${API_BASE_URL}/api/udaan-talk`,
  DISABILITY_INCLUSION: `${API_BASE_URL}/api/disability-inclusion`,
  PODCAST_GUEST: `${API_BASE_URL}/api/podcast-guest`,
  AUTH: `${API_BASE_URL}/api/auth`,
  EVENTS: `${API_BASE_URL}/api/events`,
  MEDIA: `${API_BASE_URL}/api/media`,
};

export default API_BASE_URL;

