# NEXT ADMIN
NEXT JS(v14) ADMIN

## VERSION
- NODE : v20.0.0+
- NPM : v9.9.4+

## SKILL
- MUI(Material UI)
- SCSS
- Zustand
- TanStack-Query(v5)
- ESLint
- Prettier
- StyleLint
- Husky

## START
```bash
npm install // or npm i
npm run dev // develoment mode
npm run prod // production mode
```

## FOLDER TREE
FSD (Feature-Sliced Design) 아키텍처 기반의 구조

<img src="https://feature-sliced.design/kr/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg" alt="FSD 계층 구조">

```
├── 📂 public
│   ├── 📂 assets
│   │   ├── 📂 fonts
│   │   ├── 📂 images
├── 📂 src
│   ├── 📂 app
│   ├── 📂 entities
│   │   ├── 📂 apis
│   ├── 📂 features
│   ├── 📂 layout
│   ├── 📂 pages
│   ├── 📂 shared
│   │   ├── 📂 apis
│   │   ├── 📂 constants
│   │   ├── 📂 hooks
│   │   ├── 📂 ui
│   │   ├── 📂 utils
│   ├── 📂 styles
│   ├── 📂 widgets
```

* App, Shared는 슬라이스를 가지지 않으며 세그먼트로 구성

단일인 경우에는 세그먼트(segment) 만들지 말 것!