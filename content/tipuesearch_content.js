var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323146 \xa0 \n 個人網站: https://github.com/mdecp2024/hw-41323146 \xa0 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '題目一 \n \n 題目二 \n \n \n 題目三 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11_hw', 'text': '題目一 \n def print_triangle(size):\n    for i in range(1, size + 1):\n        print(\'*\' * i)\n\n# 設定三角形的高度\nprint_triangle(5)\n \n 心得: 有了上次W10的經驗有比較熟練了很開心 \n \n 題目二 \n 心得: 覺得越來越有趣了 \n \n 程式 \n from browser import html\nfrom browser import document as doc\n\n# 利用 HTML 建立畫布超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每格的像素數\ngs = 20  # 每個格子的大小\n\n# 取得畫布的 2D 繪圖上下文\nctx = canvas.getContext("2d")\n\n# 繪製矩形的函數\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 繪製 10x10 的格子\ndef grid(width, height, grid_pix):\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 填充格子的函數\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x - 1, y - 1, gs, gs)\n\n# 在方格內繪製圓形\ndef draw_circle(center_x, center_y, radius, color):\n    # 計算圓心的座標在畫布上的位置 (需要考慮格子的大小)\n    cx = center_x * gs + gs / 2\n    cy = center_y * gs + gs / 2\n    \n    ctx.fillStyle = color\n    ctx.beginPath()\n    ctx.arc(cx, cy, radius * gs, 0, 2 * 3.14159)  # 設定圓心座標與半徑\n    ctx.fill()\n\n# 繪製 10x10 的格子\ngrid(10, 10, gs)\n\n# 繪製圓形，圓心在 (5,5)，半徑為 3\ndraw_circle(5, 5, 3, "black")\n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '題目一 \n n=11 \nspace = \'_\'\ncenter = n//2\n\nfor y in range(n):\n    for x in range(n):\n        print("(",x,",",y,")",sep="") \n \n \n 第一題 \n 程式 \n 程式2 \n 第二題 \n 程式 \n 第三題 \n 程式 \n 第四題 \n 程式 \n 第五題 \n 程式 \n 第六題 \n 程式 \n 第七題 \n 程式 \n 第八題 \n 程式 \n 第九題 \n 程式 \n 第十題 \n 程式', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n from browser import html\nfrom browser import document as doc\nimport math\n  \ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n  \nctx = canvas.getContext("2d")\nctx.lineWidth = 4\n \n#混色的\nctx.globalCompositeOperation = "screem"\n \n \n#黑邊圓*2(每個畫四個邊邊)\nctx.strokeStyle = \'black\'\n#第一個圓\nctx.beginPath()\nctx.arc(160, 160, 141, 0.25 * math.pi,0.75 * math.pi)\nctx.fillStyle = "Turquoise"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(160, 160, 141, 0.75 * math.pi,1.25 * math.pi)\nctx.fillStyle = "Tomato"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(160, 160, 141, 1.25 * math.pi,1.75 * math.pi)\nctx.fillStyle = "SpringGreen"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(160, 160, 141, 1.75 * math.pi,0.25 * math.pi)\nctx.fillStyle = "FloralWhite"\nctx.fill()\nctx.stroke()\n \n#第二個圓\nctx.beginPath()\nctx.arc(260, 260, 141, 1.25 * math.pi,1.75 * math.pi)\nctx.fillStyle = "Purple"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(260, 260, 141, 1.75 * math.pi,0.25 * math.pi)\nctx.fillStyle = "OliveDrab"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(260, 260, 141, 0.25 * math.pi,0.75 * math.pi)\nctx.fillStyle = "Orange"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.arc(260, 260, 141, 0.75 * math.pi,1.25 * math.pi)\nctx.fillStyle = "MediumVioletRed"\nctx.fill()\nctx.stroke()\n \n \n#紅方形*2(4個三角形)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(60,60)\nctx.lineTo(60,260)\nctx.lineTo(260,260)\nctx.fillStyle = "Gold"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(60,60)\nctx.lineTo(260,60)\nctx.lineTo(260,260)\nctx.fillStyle = "Indigo"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(360,160)\nctx.lineTo(360,360)\nctx.fillStyle = "Cyan"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(160,360)\nctx.lineTo(360,360)\nctx.fillStyle = "SpringGreen"\nctx.fill()\nctx.stroke()\n \n  \n#重疊的小方型\nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(160,260)\nctx.lineTo(260,260)\nctx.fillStyle = "Turquoise"\nctx.fill()\nctx.stroke()\n \nctx.beginPath()\nctx.moveTo(160,160)\nctx.lineTo(260,160)\nctx.lineTo(260,260)\nctx.fillStyle = "SlateBlue"\nctx.fill()\nctx.stroke()\n \n \n#籃斜線\nctx.strokeStyle = \'blue\'\nctx.beginPath() \nctx.moveTo(60, 60)\nctx.lineTo(260, 260)\nctx.stroke() \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_hw', 'text': 'from browser import html\nfrom browser import document as doc\nimport random\nimport math\n \n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    # 創建一個 canvas 元素，並設置其寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    # 將創建的 canvas 元素添加到指定的 HTML div 元素中\n    brython_div = doc[id]  # 獲取指定 id 的 div 元素\n    brython_div <= canvas  # 將 canvas 插入到該 div 中\n     \n    # 獲取 canvas 的 2D 繪圖上下文，這是進行繪圖的主要接口\n    ctx = canvas.getContext("2d")\n     \n    # 返回畫布和它的 2D 繪圖上下文\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    """\n    生成一個隨機的 RGB 顏色字符串。\n    返回的顏色是 "rgb(r, g, b)" 格式，其中 r, g, b 是 0 到 255 之間的隨機整數。\n    """\n    r = random.randint(0, 255)  # 隨機生成紅色成分 (0-255)\n    g = random.randint(0, 255)  # 隨機生成綠色成分 (0-255)\n    b = random.randint(0, 255)  # 隨機生成藍色成分 (0-255)\n    return f"rgb({r}, {g}, {b})"  # 返回隨機顏色字符串\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    """\n    判斷一個點 (px, py) 是否位於圓 (cx, cy, r) 內。\n    (cx, cy) 為圓心坐標，r 為圓的半徑。\n    """\n    # 使用圓的方程 (px - cx)² + (py - cy)² <= r² 判斷點是否在圓內\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    """\n    根據傳入的三個圓的圓心和半徑，繪製圓形並使用掃描線算法填充區域。\n    x1, y1, r1 是圓1的圓心坐標和半徑\n    x2, y2, r2 是圓2的圓心坐標和半徑\n    x3, y3, r3 是圓3的圓心坐標和半徑\n    """\n    # 初始化畫布，創建並取得畫布和其 2D 上下文\n    canvas, ctx = initialize_canvas(400, 400)\n     \n    # 清空畫布，以便重新繪製\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n     \n    # 顏色區域存儲字典，存儲不同區域的顏色\n    color_dict = {}\n \n    # 使用掃描線方法填充區域，逐行掃描畫布上的每個像素\n    for py in range(0, canvas.height):  # 遍歷每一行的 y 坐標\n        # 當前掃描線的顏色初始化為 None，後面會根據位置選擇顏色\n        current_color = None\n         \n        # 遍歷當前行中的每個像素點 (px, py)\n        for px in range(0, canvas.width):  # 遍歷每一列的 x 坐標\n            # 判斷該點是否在圓1內\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            # 判斷該點是否在圓2內\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            # 判斷該點是否在圓3內\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n             \n            if in_circle1 and in_circle2 and in_circle3:\n                # 如果點同時在三個圓內，則是交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 如果點在圓1和圓2的交集區域\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle2 and in_circle3:\n                # 如果點在圓2和圓3的交集區域\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1 and in_circle3:\n                # 如果點在圓1和圓3的交集區域\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle1:\n                # 如果點只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 如果點只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 如果點只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 如果點不在任何圓內，則是背景區域\n                current_color = "white"  # 背景色設為白色\n \n            # 設置當前像素的顏色並進行填充\n            ctx.fillStyle = current_color\n            # 填充當前像素 (px, py)，並且寬度和高度均為 1 像素\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n \n# 直接設定圓心和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100  # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 200, 100, 100  # 圓3：圓心 (200, 100)，半徑 100\n \n# 呼叫畫圓函式，並繪製三個圓\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3 \n', 'tags': '', 'url': 'w14_hw.html'}, {'title': 'w15_hw', 'text': '題目一 \n \xa0anchor \n # 使用內建的 sum 函數來計算從 1 加到 100 的總和\ntotal_sum = sum(range(1, 101))\n\n# 顯示結果\nprint(total_sum)\n \n 題目二 \n addto \n # 定義函式 addto，接受兩個參數 start 和 end\ndef addto(start, end):\n    total = 0\n    for i in range(start, end + 1):\n        total += i\n    return total\n\n# 呼叫函式 addto(1, 100) 並顯示結果\nresult = addto(1, 100)\nprint("1 加到 100 的總和是:", result)\n \n 題目三 \n add_only_even \n # 定義函式 add_only_even，接受兩個參數 start 和 end\ndef add_only_even(start, end):\n    total = 0\n    for i in range(start, end + 1):\n        if i % 2 == 0:  # 檢查是否為偶數\n            total += i\n    return total\n\n# 呼叫函式 add_only_even(1, 100) 並顯示結果\nresult = add_only_even(1, 100)\nprint("從 1 加到 100 的偶數總和是:", result)\n \n 題目四 \n add_avoid_8 \n # 定義函式 add_only_even_avoid_8，接受兩個參數 start 和 end\ndef add_only_even_avoid_8(start, end):\n    total = 0\n    for i in range(start, end + 1):\n        if i % 2 == 0 and \'8\' not in str(i):  # 檢查是否為偶數且不包含 \'8\'\n            total += i\n    return total\n\n# 呼叫函式 add_only_even_avoid_8(1, 100) 並顯示結果\nresult = add_only_even_avoid_8(1, 100)\nprint("從 1 加到 100 的偶數總和（避開包含 8 的數字）是:", result)\n \n \n 心得:雖然是用chatGPT但有去慢慢了解到那些英文的意思還蠻不錯的畢竟我英文很爛能多學就盡量學', 'tags': '', 'url': 'w15_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'HW 2.html'}, {'title': 'w16_exam1', 'text': 'from browser import document, html\nimport math\n\n# 建立 Canvas 並加入網頁\ncanvas = html.CANVAS(width=400, height=150, style={"border": \'1px solid black\'})\ndocument <= canvas\nctx = canvas.getContext("2d")\n\n# 設定原點座標\norigin_x, origin_y = 31, 46\n\n# 畫六邊形\ndef draw_hexagon(x, y, size):\n    ctx.beginPath()\n    for i in range(6):\n        angle = i * (2 * math.pi / 6)\n        px = x + size * math.cos(angle)\n        py = y + size * math.sin(angle)\n        if i == 0:\n            ctx.moveTo(px, py)\n        else:\n            ctx.lineTo(px, py)\n    ctx.closePath()\n    ctx.fillStyle = "orange"\n    ctx.fill()\n\n# 畫菱形\ndef draw_diamond(x, y, width, height):\n    ctx.beginPath()\n    ctx.moveTo(x, y - height / 2)  # 上\n    ctx.lineTo(x + width / 2, y)  # 右\n    ctx.lineTo(x, y + height / 2)  # 下\n    ctx.lineTo(x - width / 2, y)  # 左\n    ctx.closePath()\n    ctx.fillStyle = "teal"\n    ctx.fill()\n\n# 畫三角形\ndef draw_triangle(x, y, base, height):\n    ctx.beginPath()\n    ctx.moveTo(x - base / 2, y + height / 2)  # 左下\n    ctx.lineTo(x + base / 2, y + height / 2)  # 右下\n    ctx.lineTo(x, y - height / 2)  # 上\n    ctx.closePath()\n    ctx.fillStyle = "lightblue"\n    ctx.fill()\n\n# 畫圓形\ndef draw_circle(x, y, radius):\n    ctx.beginPath()\n    ctx.arc(x, y, radius, 0, 2 * math.pi)\n    ctx.fillStyle = "magenta"\n    ctx.fill()\n\n# 畫正方形\ndef draw_square(x, y, size):\n    ctx.beginPath()\n    ctx.rect(x - size / 2, y - size / 2, size, size)\n    ctx.fillStyle = "khaki"\n    ctx.fill()\n\n# 畫長方形\ndef draw_rectangle(x, y, width, height):\n    ctx.beginPath()\n    ctx.rect(x - width / 2, y - height / 2, width, height)\n    ctx.fillStyle = "navy"\n    ctx.fill()\n\n# 標示原點座標\ndef mark_origin(x, y):\n    ctx.font = "12px Arial"\n    ctx.fillStyle = "black"\n    ctx.fillText(f"({x}, {y})", x - 10, y - 30)  # 座標標示移到上方\n\n# 繪製圖形\ndraw_hexagon(origin_x, origin_y, 30)  # 六邊形\ndraw_diamond(origin_x + 70, origin_y, 40, 60)  # 菱形\ndraw_triangle(origin_x + 85, origin_y + 45, 40, 40)  # 三角形 (疊在菱形下方)\ndraw_circle(origin_x + 140, origin_y, 30)  # 圓形\ndraw_square(origin_x + 210, origin_y, 40)  # 正方形\ndraw_rectangle(origin_x + 280, origin_y, 60, 30)  # 長方形\n\n# 標示原點\nmark_origin(origin_x, origin_y) \n \n 連結', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯.', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'w16_exam2', 'text': '', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯.', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束  \n \n  ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};