<template>
  <div class="navbar">

      <Dropdown class="navbar-user" :width="200">
        <!-- trigger element -->
        <template #trigger>
          <button type="button">
            <img src="@/assets/user.jpeg" alt="Аватар пользователя" decoding="async">

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

  .navbar-user img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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
</style>
