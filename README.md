
## 로그인,로그아웃 페이지

1. 로그인 페이지에서 회원가입 시 파이어베이스에 저장된 데이터를 이용해 이메일,비밀번호를 입력함
1-1. 올바른 이메일과 비밀번호 입력 시 파이버베이스의 signInWithEmailAndPassword 메서드를 이용하여 로그인이 수행됨. 로그인 페이지에서 메인화면으로 넘어가고 세션스토리지에 사용자의 UID를 저장함
1-2. 올바르지 않은 이메일 또는 비밀번호 입력 시 로그인 상단 버튼에 에러 메세지가 뜨게 하였음
   
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**



