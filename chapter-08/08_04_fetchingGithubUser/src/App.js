import React, { useEffect, useState } from 'react';

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));

  useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    //비동기통신 정보 조회 - 로컬스토리지 정보 없고
    const { name, avatar_url, location } = data;
    // 로컬스토리지 저장

    saveJSON(`user:${login}`, {
      login,
    });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    // data 스테이트 변수 값 생성 : 최초 비동기 통신

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return null;
}

export default function App() {
  return <GitHubUser login="hosiceom" />;
}
