<template>
  <nav class="nav nav-pills flex-column flex-sm-row">
    <ul class="nav nav-pills nav-fill">
<!--      just test it  in browser to know how works with out 'exact' attribute-->
      <router-link to="/" tag="li" active-class="active" exact=""><a>Home</a></router-link>
      <router-link to="/user/10" tag="li" active-class="active"><a>User-1</a></router-link>
      <router-link to="/user/12" tag="li" active-class="active"><a>User-2</a></router-link>

    </ul>

   </nav>
</template>
