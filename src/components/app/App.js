import React from "react";
import AppHeader from "../app-header/AppHeader";
import PostAddForm from "../post-add-form/PostAddForm";
import PostList from "../post-list/PostList";
import PostStatusFilter from "../post-status-filter/PostStatusFilter";
import SearchPanel from "../search-panel/SearchPanel";
import "./App.css";
// import styled from "styled-components";

// const AppBlock = styled.div`
//   margin: 0 auto;
//   max-width: 800px;
// `;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React", important: true, id: 1 },
        { label: "That is so good", important: false, id: 2 },
        { label: "I need a break...", important: false, id: 3 },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }
  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newItem = { label: body, important: false, id: this.maxId++ };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader data={this.state.data} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}