<template>
  <div class="container">
    <h1>Playground</h1>
    <div class="item-box">
      <button class="button" @click="handleClick">
        Increment: {{ count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import { useCounterStore } from "./stores/counter";

const counterStore = useCounterStore();
const { increment } = counterStore;

const { count } = toRefs(counterStore.state);

function handleClick() {
  increment();
}
</script>

<style scoped>
.container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.item-box {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 1rem 2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 1.5;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: translateX(-100%);
  transition: 0.6s;
}

.button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.button:hover::before {
  transform: translateX(100%);
}

.button:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
}

@media (max-width: 768px) {
  .container {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .button {
    width: 100%;
    padding: 1rem;
  }
}
</style>
