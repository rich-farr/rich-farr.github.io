var blogs = [
            ['../index', 'Home Page'],
            ['c1-reflection-blog', 'Reflection'],
            ['c1-time-and-habits-blog', 'Time & Habits'],
            ['t2-html-css-dom-p1', 'Tech Blog 1'],
            ['t2-html-css-dom-p2', 'Tech Blog 2'],
            ['c2-emotional-intelligence', 'Emotional Intelligence'],
            ['t3-design-to-web-blog', 'Tech Blog 3'],
            ['c3-meditation-process', 'Meditation'],
            ['t4-javascript-basics', 'Tech Blog 4'],
            ['c4-daily-mindfulness', 'Daily Mindfulness'],
            ['c5-self-confidence', 'Self Confidence']
            ];

  for (var i = 0; i < blogs.length; i++) {
    var menu = '<div class="link"><a href="' + blogs[i][0] + '.html">' + blogs[i][1] + '</a></div>';
      document.getElementById('menu').innerHTML += menu;
  };