const { env } = process;

export default {
  defaultLanguage: env.REACT_APP_DEFAULT_LANGUAGE || 'en',
  refreshInterval: Number(env.REACT_APP_UPDATE_INTERVAL_SECS) || 600,
  enableTwitchAuth: (env.REACT_APP_ENABLE_TWITCH_AUTH === 'true') || false,
  maxProfiles: Number(env.REACT_APP_MAXIMUM_PLAYER_PROFILE_COUNT) || 3,
};
