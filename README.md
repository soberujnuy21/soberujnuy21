# Blog Demo

흰 배경 + 남색 포인트로 칸을 나눈 개인 블로그용 GitHub Pages 사이트입니다.

## 구조

```
portfolio-demo/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── posts.js    # 글 목록 (여기만 수정하면 됨)
│   └── script.js   # 글을 화면에 렌더링하는 로직
└── assets/         # 이미지 등 리소스 (필요 시 추가)
```

## 글 쓰는 방법

`js/posts.js` 배열 맨 위에 아래 형식으로 객체를 하나 추가하면 자동으로 홈페이지에 최신순으로 나타납니다.

```js
{
  date: '2026-07-24',
  title: '글 제목',
  tags: ['태그1', '태그2'],
  content: `본문 내용.
줄바꿈은 이렇게 하면 됩니다.`
}
```

## 로컬 실행

`index.html`을 브라우저로 열면 바로 확인할 수 있습니다.

## GitHub Pages 배포

1. 새 GitHub 저장소를 만들고 이 폴더의 내용을 push 합니다.

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. 저장소 Settings → Pages → Source에서 `main` 브랜치, `/ (root)` 폴더를 선택합니다.
3. 잠시 후 `https://<username>.github.io/<repo>/` 에서 확인할 수 있습니다.

## 커스터마이징

- `index.html`: 이름, 소개, 프로젝트, 경력, 연락처 텍스트 및 링크 수정
- `css/style.css` 상단 `:root` 변수: 색상 테마 변경
- `js/script.js`: 인터랙션 로직 추가
