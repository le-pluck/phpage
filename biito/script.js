let metronomeInterval;
const clickSound = document.getElementById('clickSound');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    const bpm = document.getElementById('bpm').value;
    const volume = document.getElementById('volume').value / 100;
    const selectedSound = document.getElementById('soundSelect').value;

    clickSound.src = selectedSound; // 设置选择的音效
    clickSound.volume = volume;

    if (toggleBtn.textContent === "开始") {
        const interval = 60000 / bpm; // 每拍的间隔（毫秒）

        metronomeInterval = setInterval(() => {
            clickSound.currentTime = 0; // 从头开始播放
            clickSound.play();
        }, interval);
        
        toggleBtn.textContent = "停止"; // 更改按钮文本
    } else {
        clearInterval(metronomeInterval);
        toggleBtn.textContent = "开始"; // 更改按钮文本
    }
});

// 动态调节音量
document.getElementById('volume').addEventListener('input', () => {
  const volume = document.getElementById('volume').value / 100;
  clickSound.volume = volume; // 动态调整音量
});

// 动态切换音效
document.getElementById('soundSelect').addEventListener('change', () => {
  const selectedSound = document.getElementById('soundSelect').value;
  clickSound.src = selectedSound; // 动态切换音效
  clickSound.currentTime = 0; // 重置音效播放位置
});