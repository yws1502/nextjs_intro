# Next js intro

## [redirect](https://nextjs.org/docs/api-reference/next.config.js/redirects)
- `next.config.js`파일에서 `redirects`함수 생성
```js
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact", // 접근 path
        destination: "/form", // redirect path
        permanent: false, // 캐시 유무
      }
    ];
  },
}
```
- `redirects`함수를 생성하고 리턴 값으로 배열을 반환한다.
  - 배열은 접근하는 path(`source`)와 리다이렉트 되는 경로(`destination`)
  - `permanent`
    - true인 경우 : 308 상태 코드 사용, 검색 엔진에 리다이렉션을 영구적으로 캐시하도록 지시
    - false인 경우 : 307 상태 코드 사용, 일시적이고 캐시하지 않음

## rewrite
- `redirect`와 같이 특정 url 접근 시 다른 경로로 이동하게 한다.
- 차이점은 경로는 이전 경로를 그대로 사용한다.
```js
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies", // 접근 url
        destination: `https://api.themoviedb~~~?api_key=${API_KEY}`, // 이동 URL 브라우저에서는 안나옴
      }
    ];
  }
}
```