const githubUrl = 'https://github.com/login/oauth/authorize'
const client_id = '83f05f22dfe5716b5c92'
const redirect_uri = 'http://localhost:1234/callback'
const scope = 'repo+user'
const state = '1234'

export default () => {
  return `${githubUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`
}
