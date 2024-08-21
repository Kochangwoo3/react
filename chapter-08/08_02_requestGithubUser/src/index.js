const BASE_URL = 'http://localhost:8090/api';

export async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubLogin}`);
    //const response = await fetch(`${BASE_URL}/news/${githubLogin}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

// 데이터 생성 : POST   변경할때는 PUT
/*
입력 콤포넌트 폼
const formData = new FormData();
fromData.append("title", "뉴스제목데이타");
fromData.append("dt", "2024-08-14");
fromData.append("content", "뉴스내용데이타");
fromData.append("img", imgFile);


export async function createNews(formdata){
  const response = await(`${BASE_URL}/news`, {
    method: "POST",
    body: formdata
  })

  if(!response.ok){
    throw new Error("뉴스를 등록하는데 실패했습니다.")
  }
  const body = await response.json();
  return body;
}

requestGithubUser('1');
*/

requestGithubUser('hosiceom');
