# 원티드 프리온보딩 인턴십 4주차 과제

## 실행 방법

```bash
npm install
npm run start
```

http://localhost:3000 접속

### Client only

```bash
npm install
npm run start:client
```

http://localhost:3000 접속

## 기능

### 캐싱

CacheStorage에 Response를 저장하여 캐싱

Request header에 요청 날짜를 저장하여 유효한 캐시 여부를 판별

[코드](https://github.com/m4nd4r1n/pre-onboarding-11th-4/blob/main/src/libs/cache.ts)

![](https://github.com/m4nd4r1n/pre-onboarding-11th-4/assets/96206089/912da060-6cd0-4701-aa0b-4e967a68a0f1)

### 검색어 이동

키보드 위, 아래 방향키로 검색어 이동

[코드](https://github.com/m4nd4r1n/pre-onboarding-11th-4/blob/main/src/components/SearchBar.tsx#L43-L55)

![](https://github.com/m4nd4r1n/pre-onboarding-11th-4/assets/96206089/559dc9f0-4277-4ab1-a3ba-5e033aea8b89)
