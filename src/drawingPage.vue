
    <template>
      <div id="app">
        <div class="main">
          <div class="color-guide">
            <h5>SilexOasis</h5>
          </div>
          <!-- Bind the custom directive to the canvas element -->
          <canvas v-canvas></canvas>
        </div>
      </div>
    </template>

    <script>
    //this one is for drawing, mimght not be useful, my idea so far is for search or login
    import canvas from './canvas.directive.js';
    export default {
      name: 'app',
      directives: {
        canvas,
      },
    };
    </script>
    <style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: rgba(49, 8, 8, 0.274);
      margin-top: 60px;
    }
    canvas {
      background: rgb(255, 255, 255);
    }
    .main {
      display: flex;
      justify-content: center;
    }
    .color-guide {
      margin: 20px 40px;
    }
    h5 {
      margin-bottom: 10px;
    }
    .user {
      padding: 7px 15px;
      border-radius: 4px;
      color: white;
      font-size: 13px;
      font-weight: bold;
      background: rgba(38, 0, 255, 0.178);
      margin: 10px 0;
    }
    .guest {
      background: greenyellow;
      color: black;
    }
    </style>