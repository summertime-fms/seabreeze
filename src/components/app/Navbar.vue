<template>
  <div class="navbar">

    <div class="navbar-left">
      <button class="notifications" type="button" data-count="20">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5031 8.86363V9.85016C12.4597 11.9183 8.9361 18.7113 9.06398 24.5985L9.06392 27.8683C6.48212 31.1874 6.63403 36.1363 13.0753 36.1363H17.5031C17.5031 37.4925 18.0316 38.7932 18.9724 39.7522C19.9131 40.7113 21.189 41.25 22.5195 41.25C23.85 41.25 25.1259 40.7113 26.0666 39.7522C27.0075 38.7932 27.5359 37.4925 27.5359 36.1363H31.9759C38.4049 36.1363 38.4981 31.1771 35.9166 27.858L35.9884 24.603C36.1183 18.709 32.5881 11.9099 27.5359 9.84467V8.86363C27.5359 7.50742 27.0075 6.20674 26.0666 5.24775C25.1259 4.28876 23.85 3.75 22.5195 3.75C21.189 3.75 19.9131 4.28876 18.9724 5.24775C18.0316 6.20674 17.5031 7.50741 17.5031 8.86363ZM24.1916 8.86363C24.1916 8.89824 24.1907 8.93276 24.1886 8.96711C23.6439 8.89881 23.0891 8.86363 22.5263 8.86363C21.9587 8.86363 21.3994 8.89939 20.8506 8.96878C20.8485 8.93389 20.8474 8.89881 20.8474 8.86363C20.8474 8.41157 21.0236 7.97801 21.3371 7.65834C21.6506 7.33867 22.0761 7.15909 22.5195 7.15909C22.9629 7.15909 23.3884 7.33867 23.7019 7.65834C24.0156 7.97801 24.1916 8.41157 24.1916 8.86363ZM20.8474 36.1363C20.8474 36.5884 21.0236 37.0221 21.3371 37.3417C21.6506 37.6612 22.0761 37.8409 22.5195 37.8409C22.9629 37.8409 23.3884 37.6612 23.7019 37.3417C24.0156 37.0221 24.1916 36.5884 24.1916 36.1363H20.8474ZM31.9759 32.7272C33.4044 32.7272 34.1751 31.0191 33.2454 29.9134C32.7937 29.3762 32.553 28.6927 32.5686 27.9911L32.6449 24.5265C32.7726 18.739 28.2051 12.2727 22.5263 12.2727C16.8487 12.2727 12.2818 18.7369 12.4075 24.5229L12.4828 27.9917C12.498 28.6931 12.2574 29.3764 11.8057 29.9134C10.876 31.0191 11.6467 32.7272 13.0753 32.7272H31.9759Z" fill="#F2F2F2"/>
        </svg>
      </button>

      <Dropdown class="navbar-user" :width="200">
        <!-- trigger element -->
        <template #trigger>
          <button type="button">
            <div class="image">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="53" viewBox="0 0 41 53" fill="none">
                <path d="M40 52C40 41.2305 31.2696 32.5 20.5 32.5C9.73046 32.5 1 41.2305 1 52M20.5 24.1429C14.346 24.1429 9.35714 19.1541 9.35714 13C9.35714 6.846 14.346 1.85718 20.5 1.85718C26.6539 1.85718 31.6429 6.846 31.6429 13C31.6429 19.1541 26.6539 24.1429 20.5 24.1429Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <span>Алексей Бутов</span>
          </button>
        </template>

        <!-- contents display in dropdown -->
        <div class="navbar-user-menu">
          <ul>
            <li>
              <a href="#">
                Выйти
              </a>
            </li>

            <li>
              <a href="#">
                Профиль
              </a>
            </li>
          </ul>
        </div>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from 'v-dropdown'
  export default {
    components: {
      Dropdown
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    background-color: var(--lighten-bg);
    display: flex;
    padding: 0 45px;
    border-radius: var(--radius);
    grid-column: 2/-1;
    grid-row: 1/2;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: auto;
  }

  .navbar-user {
    margin-left: auto;
    display: grid;
  }

  .navbar-user button {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 18px;
    line-height: 1.25;
    transition: opacity var(--trans);

    &:hover {
      opacity: 0.85;
    }
  }

  .navbar-user .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--darken-bg);
    display: grid;
    place-items: center;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  .popover-wrapper {
    position: relative;
    display: grid;
    place-items: center;
  }

  .navbar-user-menu {
    width: 100%;
    border-radius: var(--radius);

    ul {
      display: flex;
      flex-direction: column;
    }
  }

  .navbar-user-menu ul {
    padding: 15px;
    margin: 0;

    a {
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;

      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: var(--base-bg);
        }
      }
    }
  }

  .notifications {
    position: relative;
    border-radius: var(--radius);

    &::before {
      content: attr(data-count);
      position: absolute;
      display: grid;
      font-size: 14px;
      place-items: center;
      width: 25px;
      height: 25px;
      background-color: #e76969;
      border-radius: 50%;
    }
  }
</style>
