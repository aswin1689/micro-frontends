<template>
  <div id="app">
    <header class="main-header">
      <div class="container">
          <img
            src="./assets/logo.png"
            width="100"
            height="100"
            alt="home depot logo"
          />
        <nav class="main-nav">
          <ul class="main-nav-list">
            <li>
              <router-link class="nav-item" to="/">Products</router-link>
            </li>
            <li>
              <router-link class="nav-item" to="/react">Cart</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}

/**
 * Images a now responsive
 */
img {
  max-width: 100%;
  height: auto;
}

/**
 * Limit the container in
 * width for big screens
 */
.container {
  width: 960px;
  max-width: 100%;
  padding: 10px;
  margin: 0 auto;
}

/**
 * By using display: flex
 * Logo and nav are in 2 cols
 * align-items make them
 * vertically centered
 * justify-content distribute
 * horizontal spaces around
 * and flex-wrap break the
 * things in two lines in
 * small screens
 */
.main-header .container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

/**
 * The followings are to
 * make things more
 * clean and airy
 * and contents centered
 */
.main-nav ul {
  margin: 1em 0 0.5em;
  text-align: center;
}
.main-nav li {
  display: inline;
}
.main-nav a {
  display: inline-block;
  padding: 0.5em 1.5em;
}
</style>