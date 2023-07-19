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

![ezgif com-video-to-gif](https://github.com/m4nd4r1n/pre-onboarding-11th-4/assets/96206089/fe8735cd-eaf2-43e7-bfa5-aa922bfbfac1)

### API 호출 최적화

debounce를 이용하여 API 호출 최적화

[debounce 코드](https://github.com/m4nd4r1n/pre-onboarding-11th-4/blob/main/src/libs/debounce.ts)
[적용 코드](https://github.com/m4nd4r1n/pre-onboarding-11th-4/blob/main/src/components/SearchBar.tsx#L63)

![](https://github.com/m4nd4r1n/pre-onboarding-11th-4/assets/96206089/9b21f34d-4b0c-46b1-83b3-08e8f33a8b2d)

### 검색어 이동

키보드 위, 아래 방향키로 검색어 이동

[코드](https://github.com/m4nd4r1n/pre-onboarding-11th-4/blob/main/src/components/SearchBar.tsx#L43-L55)

![ezgif com-video-to-gif (1)](https://github.com/m4nd4r1n/pre-onboarding-11th-4/assets/96206089/29d28237-8a14-4615-83b7-8acbdf0cedd2)
