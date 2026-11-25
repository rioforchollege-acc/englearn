const curriculumData = {
      chapters: [
        {
          id: "bab-1",
          title: "Bab 1: About Me",
          topics: [
            {
              id: "bab1-topik1",
              title: "Let Me Introduce Myself",
              videoUrl: "https://youtu.be/f-p9ltpt6yI?si=ePJ6EQGeFYN0cIAt",
              vocabulary: [
                { word: "My name is...", phonetic: "/mai neim iz/", meaning: "Nama saya adalah...", example: "My name is Galang." },
                { word: "Nickname", phonetic: "/nik-neim/", meaning: "Nama panggilan", example: "You can call me Galang. That is my nickname." },
                { word: "I am from...", phonetic: "/ai em from/", meaning: "Saya berasal dari...", example: "I am from Tondano." },
                { word: "I live in...", phonetic: "/ai liv in/", meaning: "Saya tinggal di...", example: "I live in Sulawesi." },
                { word: "Years old", phonetic: "/yirs old/", meaning: "Tahun (usia)", example: "I am thirteen years old." },
                { word: "Student", phonetic: "/styu-dent/", meaning: "Siswa / Pelajar", example: "I am a seventh-grade student." },
                { word: "My hobby is...", phonetic: "/mai hobi iz/", meaning: "Hobi saya adalah...", example: "My hobby is playing football." },
                { word: "Sibling", phonetic: "/sib-ling/", meaning: "Saudara kandung", example: "I have two siblings, one brother and one sister." },
                { word: "Favorite", phonetic: "/fei-ve-rit/", meaning: "Kesukaan / Favorit", example: "Blue is my favorite color." },
                { word: "Nice to meet you", phonetic: "/nais tu mit yu/", meaning: "Senang bertemu denganmu", example: "Hello, nice to meet you!" }
              ],
              transcript: [
                { en: "Hello everyone! Let me introduce myself.", id: "Halo semuanya! Izinkan saya memperkenalkan diri." },
                { en: "My full name is Galang Pratama.", id: "Nama lengkap saya adalah Galang Pratama." },
                { en: "I am thirteen years old and I am a seventh-grade student.", id: "Saya berumur tiga belas tahun dan saya siswa kelas tujuh." },
                { en: "I live on Jalan Merdeka with my parents.", id: "Saya tinggal di Jalan Merdeka bersama orang tua saya." },
                { en: "My favorite hobby is reading comics and cycling.", id: "Hobi favorit saya adalah membaca komik dan bersepeda." }
              ]
            },
            {
              id: "bab1-topik2",
              title: "Introducing My Best Friend",
              videoUrl: "https://youtu.be/PeJ3M2QPQDo?si=X9Cv1nMMj8f5zFl6",
              vocabulary: [
                { word: "Best friend", phonetic: "/best frend/", meaning: "Sahabat baik", example: "She is my best friend." },
                { word: "He / She is...", phonetic: "/hi / syi iz/", meaning: "Dia (laki-laki / perempuan) adalah...", example: "She is very kind." },
                { word: "Classmate", phonetic: "/klas-meit/", meaning: "Teman sekelas", example: "Andre is my classmate." },
                { word: "Friendly", phonetic: "/frend-li/", meaning: "Ramah", example: "Everyone likes her because she is friendly." },
                { word: "Kind", phonetic: "/kaind/", meaning: "Baik hati", example: "He is a kind boy who always helps others." },
                { word: "Helpful", phonetic: "/help-ful/", meaning: "Suka menolong", example: "Monita is very helpful in class." },
                { word: "Cheerful", phonetic: "/cir-ful/", meaning: "Ceria", example: "She always has a cheerful smile." },
                { word: "Tall / Short", phonetic: "/tol / syort/", meaning: "Tinggi / Pendek", example: "My best friend is tall and slim." },
                { word: "Curly hair", phonetic: "/ker-li her/", meaning: "Rambut keriting", example: "He has short curly hair." },
                { word: "Together", phonetic: "/tu-ge-der/", meaning: "Bersama-sama", example: "We always go to school together." }
              ],
              transcript: [
                { en: "This is my best friend, Monita.", id: "Ini adalah sahabat baik saya, Monita." },
                { en: "She is twelve years old.", id: "Dia berumur dua belas tahun." },
                { en: "She likes listening to music and drawing.", id: "Dia suka mendengarkan musik dan menggambar." },
                { en: "We always go to school together.", id: "Kami selalu pergi ke sekolah bersama-sama." }
              ]
            }
          ]
        },
        {
          id: "bab-2",
          title: "Bab 2: My Favorite Food",
          topics: [
            {
              id: "bab2-topik1",
              title: "Describing My Favorite Meals",
              videoUrl: "https://www.youtube.com/watch?v=5211N9l2r_Q",
              vocabulary: [
                { word: "Delicious", phonetic: "/di-li-syes/", meaning: "Lezat / Enak", example: "Fried rice is very delicious." },
                { word: "Spicy", phonetic: "/spai-si/", meaning: "Pedas", example: "I like spicy sambal." },
                { word: "Sweet", phonetic: "/swit/", meaning: "Manis", example: "This banana fritter is sweet." },
                { word: "Savory", phonetic: "/sei-ve-ri/", meaning: "Gurih", example: "Chicken soup tastes savory." },
                { word: "Salty", phonetic: "/sol-ti/", meaning: "Asin", example: "The chips are a little bit salty." },
                { word: "Sour", phonetic: "/sau-er/", meaning: "Asam", example: "Lemon juice tastes very sour." },
                { word: "Crispy / Crunchy", phonetic: "/kris-pi / kran-ci/", meaning: "Renyah / Garing", example: "I love eating crispy crackers." },
                { word: "Breakfast", phonetic: "/brek-fest/", meaning: "Sarapan", example: "I eat bread for breakfast." },
                { word: "Lunch", phonetic: "/lanc/", meaning: "Makan siang", example: "We have lunch at twelve o'clock." },
                { word: "Beverage / Drink", phonetic: "/be-ve-rij / dringk/", meaning: "Minuman", example: "Iced tea is my favorite beverage." }
              ],
              transcript: [
                { en: "My favorite food is Indonesian fried rice.", id: "Makanan favorit saya adalah nasi goreng Indonesia." },
                { en: "It tastes savory and a little bit spicy.", id: "Rasanya gurih dan sedikit pedas." },
                { en: "I usually eat it with fried egg and crackers.", id: "Saya biasanya memakannya dengan telur goreng dan kerupuk." },
                { en: "For dessert, I love sweet iced tea.", id: "Untuk hidangan penutup, saya suka es teh manis." }
              ]
            },
            {
              id: "bab2-topik2",
              title: "Ingredients & Utensils",
              videoUrl: "https://www.youtube.com/watch?v=4xK6sB64C88",
              vocabulary: [
                { word: "Ingredients", phonetic: "/in-gri-di-ens/", meaning: "Bahan-bahan masakan", example: "Prepare all the ingredients first." },
                { word: "Frying pan", phonetic: "/frai-ing pen/", meaning: "Wajan penggorengan", example: "Heat the oil in the frying pan." },
                { word: "Spoon & Fork", phonetic: "/spun en fork/", meaning: "Sendok & Garpu", example: "We eat noodles with a spoon and fork." },
                { word: "Knife", phonetic: "/naif/", meaning: "Pisau", example: "Be careful when using a sharp knife." },
                { word: "Bowl & Plate", phonetic: "/bol en pleit/", meaning: "Mangkuk & Piring", example: "Serve the hot soup in a bowl." },
                { word: "Cut / Chop", phonetic: "/kat / cop/", meaning: "Memotong / Mencincang", example: "Chop the garlic into small pieces." },
                { word: "Stir", phonetic: "/ster/", meaning: "Mengaduk", example: "Stir the sugar until it dissolves." },
                { word: "Pour", phonetic: "/por/", meaning: "Menuangkan", example: "Pour the water into the glass." },
                { word: "Boil", phonetic: "/boil/", meaning: "Merebus", example: "Boil the water for five minutes." },
                { word: "Fry", phonetic: "/frai/", meaning: "Menggoreng", example: "Fry the egg until golden brown." }
              ],
              transcript: [
                { en: "To make a simple omelet, we need two eggs and a pinch of salt.", id: "Untuk membuat telur dadar sederhana, kita butuh dua telur dan sejumput garam." },
                { en: "First, crack the eggs into a bowl.", id: "Pertama, pecahkan telur ke dalam mangkuk." },
                { en: "Next, stir them well using a fork.", id: "Selanjutnya, kocok rata menggunakan garpu." },
                { en: "Finally, cook it on a hot frying pan.", id: "Terakhir, masak di atas wajan panas." }
              ]
            }
          ]
        },
        {
          id: "bab-3",
          title: "Bab 3: Home Sweet Home",
          topics: [
            {
              id: "bab3-topik1",
              title: "Rooms in My House",
              videoUrl: "https://www.youtube.com/watch?v=R9intHqlzhc",
              vocabulary: [
                { word: "Living room", phonetic: "/li-ving rum/", meaning: "Ruang tamu / keluarga", example: "We watch TV in the living room." },
                { word: "Bedroom", phonetic: "/bed-rum/", meaning: "Kamar tidur", example: "My bedroom is clean and tidy." },
                { word: "Kitchen", phonetic: "/ki-cen/", meaning: "Dapur", example: "Mother cooks dinner in the kitchen." },
                { word: "Bathroom", phonetic: "/bath-rum/", meaning: "Kamar mandi", example: "Wash your hands in the bathroom." },
                { word: "Dining room", phonetic: "/dai-ning rum/", meaning: "Ruang makan", example: "Our family eats together in the dining room." },
                { word: "Garage", phonetic: "/ge-raj/", meaning: "Garasi", example: "Father parks his motorcycle in the garage." },
                { word: "Garden / Yard", phonetic: "/gar-den / yard/", meaning: "Taman / Halaman", example: "There are many flowers in the garden." },
                { word: "Porch / Terrace", phonetic: "/porc / te-res/", meaning: "Teras rumah", example: "Grandfather drinks coffee on the porch." },
                { word: "Upstairs", phonetic: "/ap-sters/", meaning: "Lantai atas", example: "My bedroom is located upstairs." },
                { word: "Downstairs", phonetic: "/daun-sters/", meaning: "Lantai bawah", example: "The kitchen is downstairs." }
              ],
              transcript: [
                { en: "Welcome to my house! Let me show you around.", id: "Selamat datang di rumahku! Mari saya tunjukkan sekelilingnya." },
                { en: "This is our living room. There is a big sofa here.", id: "Ini ruang keluarga kami. Ada sofa besar di sini." },
                { en: "Behind the living room is the kitchen.", id: "Di belakang ruang keluarga adalah dapur." },
                { en: "Upstairs, there are two bedrooms and one bathroom.", id: "Di lantai atas, ada dua kamar tidur dan satu kamar mandi." }
              ]
            },
            {
              id: "bab3-topik2",
              title: "Preposition of Place",
              videoUrl: "https://youtu.be/OlUZcL_7Pbg?si=YBZvckP4ntDiM2ZR",
              vocabulary: [
                { word: "In", phonetic: "/in/", meaning: "Di dalam", example: "The books are in the bag." },
                { word: "On", phonetic: "/on/", meaning: "Di atas (menempel)", example: "The lamp is on the table." },
                { word: "Under", phonetic: "/an-der/", meaning: "Di bawah", example: "The cat is sleeping under the chair." },
                { word: "Behind", phonetic: "/bi-haind/", meaning: "Di belakang", example: "The garden is behind the house." },
                { word: "In front of", phonetic: "/in frant of/", meaning: "Di depan", example: "The car is parked in front of the garage." },
                { word: "Next to / Beside", phonetic: "/neks tu / bi-said/", meaning: "Di sebelah / Di samping", example: "The sofa is next to the window." },
                { word: "Between", phonetic: "/bi-twin/", meaning: "Di antara (dua benda)", example: "The table is between two chairs." },
                { word: "Above", phonetic: "/e-bav/", meaning: "Di atas (tidak menempel)", example: "The clock hangs above the door." },
                { word: "Below", phonetic: "/bi-lou/", meaning: "Di bawah (lebih rendah)", example: "The picture is hanging below the window." },
                { word: "Inside", phonetic: "/in-said/", meaning: "Di bagian dalam", example: "The clothes are inside the wardrobe." },
                { word: "Outside", phonetic: "/aut-said/", meaning: "Di luar", example: "The children are playing outside the house." },
                { word: "Near", phonetic: "/nir/", meaning: "Dekat", example: "The desk is near the bed." }
              ],
              transcript: [
                { en: "The stove is in the kitchen.", id: "Kompor itu berada di (dalam) dapur." },
                { en: "The television is on the cabinet.", id: "Televisi itu berada di atas kabinet." },
                { en: "The book is under the desk", id: "Buku itu berada di bawah meja." },
                { en: "The old radio is next to the television.", id: "Radio tua itu berada di samping televisi." },
                { en: "The cat is next to the sofa.", id: "Kucing itu berada di samping sofa." },
                { en: "The door is between the pictures.", id: "Pintu itu berada di antara foto-foto itu." },
                { en: "The table is in front of the sofa.", id: "Meja itu berada di depan sofa." },
                { en: "The lamp is above the dining table.", id: "Lampu itu berada di atas meja makan." }
              ]
            }
          ]
        }
      ]
    };