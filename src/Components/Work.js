import React from "react";
import Project from "./Project"

function Work() {
  return (
    <div className="container">
      <div className="row">
        <h3>Projects</h3>
        <Project title={"Thirsty Thursdays"} url={'https://chuckdvchek.github.io/thirsty-thursdays/'} githuburl={'https://github.com/ChuckDvchek/thirsty-thursdays'}/>
        <Project title={'Oceans of Knowledge'} url={'https://zortro.github.io/Project1/'} githuburl={'https://github.com/zortro/Project1'}/>
        <Project title={'ArtSea'} url={'https://artsea-2022.herokuapp.com/'} githuburl={'https://github.com/bdibil/PNW-ArtSea'}/>
      </div>
    </div>
  );
}

export default Work;