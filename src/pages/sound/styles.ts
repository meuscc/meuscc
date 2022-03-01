import { css } from "lit";

const style = css`
  :host {
  }
  .sounds-ctn {
    display: flex;
  }
  .sound-btn {
    background-color: cyan;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
  }
  .sound-btn-active {
    background-color: green;
    color: #fff;
  }

  audio {
    display: none;
  }
`;

export default [style];
