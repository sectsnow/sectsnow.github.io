setInterval(() => {
  let create_time = Math.round(new Date('2021-11-16 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  var nol = function(h){
    return h>9?h:'0'+h;
  }
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }
  if (second > 0) {
    time[4] = nol(second);
  }
  if ((Number(time[2])<22) && (Number(time[2])>7)){
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/皓户庭-营业中-6adea8?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAmJJREFUOE+dk11IFFEUx/9zd2bcaa0kAh9sybX8KiX6RiiIXkKQyCJZBD+C9KHdrBXZDKGnHnqwwI8sLVhxS7YEF8kCHwp6SPqgQiE/arGgh1ZLW8pBd3bm3pgbhjtgWOfhci/nnt85/3vOFWCxxubB2vnpmU4QG8AoBMYAStF29bTg9XYUE4JHTJJBdO1ZS8uZA2a4sJzhuRhkVHGgoKQYgmDGMlDGMBOZwvfRUUh6HHlHSzD58o1hfIqcaG31DiRBvI09LL/sJByKDBshSfUldAML8QTePXgIos4DhKD9SuWfAvjmXFNwau32QleqoSFj316eXTcoZNGWBIsndESev4I6Psbl1fZObuwqz/3GId4L3WzzsVLIkgjDoDAo5cGEEKRIIhRZ5D7TTN/rvjBFbI60Xavl8Xypq+tg1ge2nrdUVMEui1hjlznoRd8Ablw6/htiAvz+Kp6VmTJ0A6q6gOvBIdjUn5zV0FCJ5uYe5BTtgZBbiHUOO8YeP6U/vkSJmrVfEfz+29HFRS19eWZRklSN2BxKlotJuiaoszGwuVm43UcQCg0hu6oaaakKhu+FseDcqSS12CrhbH0Xk9LTP8cpNilMb9Gi0+fNO868rVh/8BDehge5pBUhFaH3+UF3zrgV7PPdHM/MzMib1gC704mvExMDf63ECqgOf0zrLnXFlhpRWFODkTu9yRO7UodO3f+wLVCWPbbc7/N1Mqe7HFP9/auE9E4+CZTnHl6CWEfin+Twway/dXnDrt1Nzh0FnDlyN7S6Sqwyvf4AM38oEyXQFOX/IEtQj6e9SHCkDv8C+K7rN4ceAyEAAAAASUVORK5CYII=' title='距离百年老店也就差不到一百年~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  else{
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/皓户庭-打烊了-6adea8?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAzxJREFUOE+Vkn1IVWccx7/POeeeF8/VUscs1zQyFrFofwz2QvjPGA4bC3JOS4joxXB2PV7fbmSiNZR7bXbNq96YhMiYgsFgSLFWW0HIKIpiY2t/bDEaTNq9uLxePfe8PecZ97Bcjv7p+efhgef3+X1/v++X4DmOpp3rUYlzsEx0rswm1zZNTBwwsuXkORi43RWO3NKl2uq11sYRax0WF/XzsVhj/QpkKhS9XSLSbUnKG7vDrfnPgs93dbFP0sU1RRydPr5VIq2/uBgcbCAe5PMTo2yffxEzaRnfLUmoLSBFO05+nHgalOjsPNG7tKEXYKcqcozu91+WievzofUnxybHtJGRhk3C0Y2ZxxieV9FUuDw5/diX2nO6/ejTkJsdPSxf5DGWLsA7fgs7C1xQUUT7b7xDgtpoKlxq5MmWha8WZVxfliAS1xwYCsj/H0nT4qyUN1GZa2KrwpDKZHByocghp4Kx+HbJPFTpN8RQstCrWyfYHZ3R5oGmpngQcCY5ThjjOKOOUlnnwLCBM1EnJxDRSwCwiLeTbIfsLYDBAUEs1kiOHPnsBTXHmaEueZvn+R9SqYXy8fFj6ebm+EeM4UL2v0zcy6eHApUr7mRBm3xuRfBM4GpvS0xPUEGpLvOjPB+4MafjyznXU5ltcL79jOm48DVE27hVOWnRRvUKv6nc1QVWrprkTcWEKMtA1kDHgWVZiC/k4Xfb58F6lIfbCvv7f14FCWqjM+vz5A+qd2zB0Nc/ws8z7PTN41XJBmUM1zIqZu01K7vOKnryWJXYtrYxVl//IYqL1+D+/YeYmvrmmYF+RbThUvtTbbA9tKKE9fUd/1aXOxkj6vdiEWlsrIGqCnAcBtOkcByKSGQc3XlzsKVchJO5eE9J44EtTGjRtgOeksGW6AOB49eXSVSpUDPoXn4JgUAtcnL+i8qjR38jHp+Gn7hsiXHkRZ6CB/1iQVQCHmS4Yzj0q8n3l/EZ408qzRjgahRFsg4frhI5jgOlFIm/ktbFS7Psje3571bVVc1GgmfZnCt6bpEnvr8mGrcODbS+tfzH3QkQ7PccOHuHKbIA26bYu2sz2Vz672IZ61JLXu+7HAqfYz753j90sVseYAZn7wAAAABJRU5ErkJggg==' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);
