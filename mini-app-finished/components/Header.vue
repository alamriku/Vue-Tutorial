<template>
  <nav class="nav nav-pills flex-column flex-sm-row">
    <ul class="nav nav-pills nav-fill">
<!--      just test it  in browser to know how works with out 'exact' attribute-->
      <router-link to="/" tag="li" active-class="active" exact=""><a>Home</a></router-link>
      <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>

    </ul>

   </nav>
</template>
