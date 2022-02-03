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

## getServerSideProps
- 서버에서 데이터를 받아 페이지의 props로 넘겨준다!
- server side를 통해 props를 page로 보내기
- fetch로 받은 데이터를 객체에 담아 return 한다
  - 객체를 props라는 `key`와 백엔드에서 받은 `value`를 갖는다.
- `getServerSideProps`를 사용하는 경우 API 통신이 끝나고 HTML이 완성이 된 후 브라우저가 보이기 시작
  - 상황에 따라 데이터 렌더링 선택하기(CSR, SSR) -> 일단 navgation이나 footer, loading화면을 보여주고 나중에 데이터를 받것 혹은 초기 화면  로딩이 조금 느리더라도 server에서 html을 완성하여 보여주는것, 이 둘 중 어떤 것이 내가 만드는 프로덕트에 더 적합한지 판단하여 사용하기

### CSR
- ReactJs -> useEffect -> useState -> fetch -> 영화 정보를 state에 넣기 -> 영화 데이터 화면에 그려주기