<script>
    import Comments from './Comments.svelte';
  </script>
  
  <style>



    .Card {
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      background-color: white;
      margin: 0 0 2em 0;
    }
    .Card-Header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1em;
    }
    .Card-user {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .Card-user img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .Card-user h2 {
      margin: 0;
      padding: 0;
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 0 1em;
      color: black;
    }
    .Card-user h2 span {
      display: block;
      font-size: 12px;
      font-weight: normal;
      color: rgba(38, 38, 38, 0.7);
    }
    .Card-photo {
      padding: 0;
      margin: 0;
    }
    .Card-photo img {
      width: 100%;
      height: auto;
    }
    .Card-photo figure {
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
    .Card-settings i {
      cursor: pointer;
    }
    .Card-icons {
      padding: 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .Card-icons i {
      margin: 0 1em 0 0;
      cursor: pointer;
      font-size: 20px;
    }
    .Card-icons i:last-child {
      margin: 0;
    }
    .Card-description {
      padding: 0 1em 1em 1em;
    }
    .Card-description h3 {
      font-size: 14px;
      font-weight: bold;
      color: black;
    }
   
  
    @keyframes bounce {
      0% {
        transform: translate(0px, 0px);
      }
      15% {
        transform: translate(0px, -25px);
      }
      30% {
        transform: translate(0px, 0px);
      }
      45% {
        transform: translate(0px, -15px);
      }
      60% {
        transform: translate(0px, 0px);
      }
      75% {
        transform: translate(0px, -5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
  </style>
  
  <div class="Card">
    <div class="Card-container">
      <div class="Card-Header">
        <div class="Card-user">
          <img src="https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
          <h2>
            Panelita.cat
            <span>Bogota, Colombia</span>
          </h2>
        </div>
        <div class="Card-settings">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div class="Card-photo">
        <figure>
          <img src="https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
        </figure>
      </div>
      <div class="Card-icons">
        <div class="Card-icons-firts">
          <i class="fas fa-heart"></i>
          <i class="fas fa-paper-plane"></i>
        </div>
        <div class="Card-icons-second">
          <i class="fas fa-bookmark"></i>
        </div>
      </div>
      <div class="Card-description">
        <h3>Panelita.cat</h3>
        <span>Hola!</span>
      </div>
      <Comments />
    </div>
  </div>
  