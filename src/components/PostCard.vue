<template>
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>
          {{ index + 1 }}
        </h2>
        <h3>
          {{ post.title }}
        </h3>
        <p>
          {{ post.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostCard",
  props: ['post', 'index']

}
</script>

<style scoped lang="scss">
$color_1: rgba(0, 0, 0, 0.07);
$color_2: rgba(0, 0, 0, 0.10);
$color_3: #777;
$color_4: white;

.card {
  position: relative;
  width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05), inset -5px -5px 5px rgba(255, 255, 255, 0.5), 5px 5px 5px rgba(0, 0, 0, 0.05), -5px -5px 5px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 30px;
  .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #ebf5fc;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    .content {
      padding: 20px;
      text-align: center;
      h2 {
        position: absolute;
        top: -10px;
        right: 30px;
        font-size: 8em;
        color: $color_1;
        pointer-events: none;
        transition: 0.5s;
        margin:0 ;
      }
      h3 {
        font-size: 1.2em;
        color: $color_3;
        z-index: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        transition: 0.5s;
      }
      p {
        font-size: 1em;
        font-weight: 300;
        color: $color_3;
        z-index: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        line-clamp: 6;
        -webkit-box-orient: vertical;
        transition: 0.5s;
      }
    }
  }
  &:hover {
    .box {
      transform: translateY(-50px);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      background: linear-gradient(45deg, #b95ce4, #4f29cd);
      .content {
        h2 {
          color: $color_2;
        }
        h3 {
          color: $color_4;
        }
        p {
          color: $color_4;
        }
      }
    }
  }
}

</style>