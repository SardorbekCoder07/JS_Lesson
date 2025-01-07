//map da aylanish
//highlight button filter qilish
//search input filter qilish
//page lari buyicha saralash
const books = [
	{
		title: 'Algorithms',
		author: ['Robert Sedgewick', 'Kevin Wayne'],
		publisher: 'Addison-Wesley Professional',
		publicationDate: '2011-03-24',
		edition: 4,
		keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
		pages: 976,
		format: 'hardcover',
		ISBN: '9780321573513',
		language: 'English',
		programmingLanguage: 'Java',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.41,
				ratingsCount: 1733,
				reviewsCount: 63,
				fiveStarRatingCount: 976,
				oneStarRatingCount: 13
			}
		},
		highlighted: true
	},
	{
		title: 'Structure and Interpretation of Computer Programs',
		author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
		publisher: 'The MIT Press',
		publicationDate: '2022-04-12',
		edition: 2,
		keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
		pages: 640,
		format: 'paperback',
		ISBN: '9780262543231',
		language: 'English',
		programmingLanguage: 'JavaScript',
		onlineContent: false,
		thirdParty: {
			goodreads: {
				rating: 4.36,
				ratingsCount: 14,
				reviewsCount: 3,
				fiveStarRatingCount: 8,
				oneStarRatingCount: 0
			}
		},
		highlighted: true
	},
	{
		title: 'Computer Systems: A Programmer\'s Perspective',
		author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
		publisher: 'Prentice Hall',
		publicationDate: '2002-01-01',
		edition: 1,
		keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
		pages: 978,
		format: 'hardcover',
		ISBN: '9780130340740',
		language: 'English',
		programmingLanguage: 'C',
		onlineContent: false,
		thirdParty: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 1010,
				reviewsCount: 57,
				fiveStarRatingCount: 638,
				oneStarRatingCount: 16
			}
		},
		highlighted: true
	},
	{
		title: 'Operating System Concepts',
		author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
		publisher: 'John Wiley & Sons',
		publicationDate: '2004-12-14',
		edition: 10,
		keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
		pages: 921,
		format: 'hardcover',
		ISBN: '9780471694663',
		language: 'English',
		programmingLanguage: 'C, Java',
		onlineContent: false,
		thirdParty: {
			goodreads: {
				rating: 3.9,
				ratingsCount: 2131,
				reviewsCount: 114,
				fiveStarRatingCount: 728,
				oneStarRatingCount: 65
			}
		}
	},
	{
		title: 'Engineering Mathematics',
		author: ['K.A. Stroud', 'Dexter J. Booth'],
		publisher: 'Palgrave',
		publicationDate: '2007-01-01',
		edition: 14,
		keywords: ['mathematics', 'engineering'],
		pages: 1288,
		format: 'paperback',
		ISBN: '9781403942463',
		language: 'English',
		programmingLanguage: null,
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.35,
				ratingsCount: 370,
				reviewsCount: 18,
				fiveStarRatingCount: 211,
				oneStarRatingCount: 6
			}
		},
		highlighted: true
	},
	{
		title: 'Introduction to Algorithms',
		author: ['Thomas H. Cormen', 'Charles E. Leiserson', 'Ronald L. Rivest', 'Clifford Stein'],
		publisher: 'MIT Press',
		publicationDate: '2009-07-31',
		edition: 3,
		keywords: ['algorithms', 'computer science', 'data structures'],
		pages: 1312,
		format: 'hardcover',
		ISBN: '9780262033848',
		language: 'English',
		programmingLanguage: 'C, Java, Python',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 13530,
				reviewsCount: 1030,
				fiveStarRatingCount: 8761,
				oneStarRatingCount: 463
			}
		},
		highlighted: false
	},
	{
		title: 'Introduction to Algorithms',
		author: ['Thomas H. Cormen', 'Charles E. Leiserson', 'Ronald L. Rivest', 'Clifford Stein'],
		publisher: 'MIT Press',
		publicationDate: '2009-07-31',
		edition: 3,
		keywords: ['algorithms', 'computer science', 'data structures'],
		pages: 1312,
		format: 'hardcover',
		ISBN: '9780262033848',
		language: 'English',
		programmingLanguage: 'C, Java, Python',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 13530,
				reviewsCount: 1030,
				fiveStarRatingCount: 8761,
				oneStarRatingCount: 463
			}
		},
		highlighted: false
	},
	{
		title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
		author: ['Robert C. Martin'],
		publisher: 'Prentice Hall',
		publicationDate: '2008-08-11',
		edition: 1,
		keywords: ['software engineering', 'clean code', 'programming'],
		pages: 464,
		format: 'hardcover',
		ISBN: '9780132350884',
		language: 'English',
		programmingLanguage: 'Java',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.4,
				ratingsCount: 49343,
				reviewsCount: 1752,
				fiveStarRatingCount: 33612,
				oneStarRatingCount: 1052
			}
		},
		highlighted: true
	},
	{
		title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
		author: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'],
		publisher: 'Addison-Wesley',
		publicationDate: '1994-10-21',
		edition: 1,
		keywords: ['design patterns', 'software design', 'object-oriented'],
		pages: 395,
		format: 'hardcover',
		ISBN: '9780201633610',
		language: 'English',
		programmingLanguage: 'C++',
		onlineContent: false,
		thirdParty: {
			goodreads: {
				rating: 4.18,
				ratingsCount: 8905,
				reviewsCount: 283,
				fiveStarRatingCount: 5322,
				oneStarRatingCount: 211
			}
		},
		highlighted: false
	},
	{
		title: 'The Pragmatic Programmer: Your Journey to Mastery',
		author: ['Andrew Hunt', 'David Thomas'],
		publisher: 'Addison-Wesley',
		publicationDate: '1999-10-30',
		edition: 1,
		keywords: ['programming', 'software engineering', 'best practices'],
		pages: 352,
		format: 'hardcover',
		ISBN: '9780201616224',
		language: 'English',
		programmingLanguage: 'Ruby, C, Java',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.48,
				ratingsCount: 25884,
				reviewsCount: 1075,
				fiveStarRatingCount: 17986,
				oneStarRatingCount: 276
			}
		},
		highlighted: true
	},
	{
		title: 'Refactoring: Improving the Design of Existing Code',
		author: ['Martin Fowler'],
		publisher: 'Addison-Wesley',
		publicationDate: '1999-07-08',
		edition: 1,
		keywords: ['refactoring', 'software design', 'code quality'],
		pages: 464,
		format: 'hardcover',
		ISBN: '9780201485677',
		language: 'English',
		programmingLanguage: 'Java',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.29,
				ratingsCount: 12090,
				reviewsCount: 385,
				fiveStarRatingCount: 7521,
				oneStarRatingCount: 269
			}
		},
		highlighted: false
	},
	{
		title: 'The Mythical Man-Month: Essays on Software Engineering',
		author: ['Frederick P. Brooks Jr.'],
		publisher: 'Addison-Wesley',
		publicationDate: '1975-01-01',
		edition: 1,
		keywords: ['software engineering', 'management', 'project management'],
		pages: 322,
		format: 'hardcover',
		ISBN: '9780201835953',
		language: 'English',
		programmingLanguage: null,
		onlineContent: false,
		thirdParty: {
			goodreads: {
				rating: 4.2,
				ratingsCount: 7397,
				reviewsCount: 302,
				fiveStarRatingCount: 4317,
				oneStarRatingCount: 178
			}
		},
		highlighted: true
	},
	{
		title: 'The Art of Computer Programming',
		author: ['Donald E. Knuth'],
		publisher: 'Addison-Wesley',
		publicationDate: '1968-01-01',
		edition: 1,
		keywords: ['algorithms', 'computer science', 'mathematics'],
		pages: 3200,
		format: 'hardcover',
		ISBN: '9780201896831',
		language: 'English',
		programmingLanguage: 'C, Pascal',
		onlineContent: false,
		thirdParty: {
			goodreads: {
				rating: 4.55,
				ratingsCount: 3890,
				reviewsCount: 220,
				fiveStarRatingCount: 3112,
				oneStarRatingCount: 37
			}
		},
		highlighted: false
	},
	{
		title: 'Artificial Intelligence: A Modern Approach',
		author: ['Stuart Russell', 'Peter Norvig'],
		publisher: 'Prentice Hall',
		publicationDate: '2009-12-28',
		edition: 3,
		keywords: ['artificial intelligence', 'computer science', 'machine learning'],
		pages: 1152,
		format: 'hardcover',
		ISBN: '9780136042594',
		language: 'English',
		programmingLanguage: 'Java, Lisp',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.28,
				ratingsCount: 35254,
				reviewsCount: 2462,
				fiveStarRatingCount: 22870,
				oneStarRatingCount: 968
			}
		},
		highlighted: false
	},
	{
		title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
		author: ['Robert C. Martin'],
		publisher: 'Prentice Hall',
		publicationDate: '2011-05-16',
		edition: 1,
		keywords: ['programming', 'software development', 'professionalism'],
		pages: 224,
		format: 'hardcover',
		ISBN: '9780137081073',
		language: 'English',
		programmingLanguage: 'Java',
		onlineContent: true,
		thirdParty: {
			goodreads: {
				rating: 4.22,
				ratingsCount: 6481,
				reviewsCount: 245,
				fiveStarRatingCount: 4009,
				oneStarRatingCount: 210
			}
		},
		highlighted: false
	}

]
const booksContainer = document.getElementById('booksContainer')
const btnHighlight = document.getElementById('highlight')
const loadingElement = document.getElementById('loading')
const sortBtn = document.getElementById('sort')
const searchInput = document.getElementById('searchInput')
// bu yerda highlighted bo'lgan kitoblar topiladi
btnHighlight.addEventListener('click', () => {
	loadingElement.style.display = 'block'
	booksContainer.innerHTML = ''

	const filterHighlighted = books.filter((book) => book.highlighted)

	setTimeout(() => {
		filterHighlighted.forEach((book) => {
			const bookCard = document.createElement('div')
			bookCard.classList.add('book-card')

			bookCard.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Author:</strong>${book.author.join(', ')}</p>
                <p><strong>Publisher:</strong>${book.publisher}</p>
                <p><strong>PublicationDate:</strong>${book.publicationDate}</p>
                <p><strong>Edition:</strong>${book.edition}</p>
                <p><strong>Pages:</strong>${book.pages}</p>
                <p><strong>Format:</strong>${book.format}</p>
                <p><strong>ISBN:</strong>${book.ISBN}</p>
                <p><strong>Language:</strong>${book.language}</p>
                <p class='keywords'><strong>Keywords:</strong>${book.keywords.join(', ')}</p>
                <p class='rating'><strong>Rating:</strong>${book.thirdParty.goodreads.rating}</p>
                <p >${book.highlighted ? "<span class='highlighted'>Highlighted</span>" : ''}</p>
            `
			booksContainer.appendChild(bookCard)
		})

		loadingElement.style.display = 'none'
	}, 1500)
})
//bu yer kitoblar page lari buyicha saralanadi
sortBtn.addEventListener('click', () => {
	booksContainer.innerHTML = ''
	loadingElement.style.display = 'block'
	const buttonSort = books.sort((a, b) => b.pages - a.pages)
	setTimeout(() => {
		buttonSort.forEach((book) => {
			const bookCard = document.createElement('div')
			bookCard.classList.add('book-card')
			bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong>${book.author.join(', ')}</p>
        <p><strong>Publisher:</strong>${book.publisher}</p>
        <p><strong>PublicationDate:</strong>${book.publicationDate}</p>
        <p><strong>Edition:</strong>${book.edition}</p>
        <p><strong>Pages:</strong>${book.pages}</p>
        <p><strong>Format:</strong>${book.format}</p>
        <p><strong>ISBN:</strong>${book.ISBN}</p>
        <p><strong>Language:</strong>${book.language}</p>
        <p class='keywords'><strong>Keywords:</strong>${book.keywords.join(', ')}</p>
        <p class='rating'><strong>Rating:</strong>${book.thirdParty.goodreads.rating}</p>
        <p >${book.highlighted ? "<span class='highlighted'>Highlighted</span>" : ''}</p>
    `

			booksContainer.appendChild(bookCard)
		})
		loadingElement.style.display = 'none'
	}, 1500)
})

// bu  yerda hamma kitoblar ko'rsatiladi
books.forEach((book) => {
	const bookCard = document.createElement('div')
	bookCard.classList.add('book-card')

	bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong>${book.author.join(', ')}</p>
        <p><strong>Publisher:</strong>${book.publisher}</p>
        <p><strong>PublicationDate:</strong>${book.publicationDate}</p>
        <p><strong>Edition:</strong>${book.edition}</p>
        <p><strong>Pages:</strong>${book.pages}</p>
        <p><strong>Format:</strong>${book.format}</p>
        <p><strong>ISBN:</strong>${book.ISBN}</p>
        <p><strong>Language:</strong>${book.language}</p>
        <p class='keywords'><strong>Keywords:</strong>${book.keywords.join(', ')}</p>
        <p class='rating'><strong>Rating:</strong>${book.thirdParty.goodreads.rating}</p>
        <p >${book.highlighted ? "<span class='highlighted'>Highlighted</span>" : ''}</p>
    `

	booksContainer.appendChild(bookCard)
})

searchInput.addEventListener('input', () => {
	const searchItem = books.filter((item) => {
		return item.title.toLowerCase().includes(searchInput.value.toLowerCase())
	})
	booksContainer.innerHTML = ''
	searchItem.forEach((book) => {
		const bookCard = document.createElement('div')
		bookCard.classList.add('book-card')
		bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong>${book.author.join(', ')}</p>
        <p><strong>Publisher:</strong>${book.publisher}</p>
        <p><strong>PublicationDate:</strong>${book.publicationDate}</p>
        <p><strong>Edition:</strong>${book.edition}</p>
        <p><strong>Pages:</strong>${book.pages}</p>
        <p><strong>Format:</strong>${book.format}</p>
        <p><strong>ISBN:</strong>${book.ISBN}</p>
        <p><strong>Language:</strong>${book.language}</p>
        <p class='keywords'><strong>Keywords:</strong>${book.keywords.join(', ')}</p>
        <p class='rating'><strong>Rating:</strong>${book.thirdParty.goodreads.rating}</p>
        <p >${book.highlighted ? "<span class='highlighted'>Highlighted</span>" : ''}</p>
    `

		booksContainer.appendChild(bookCard)
	})

})
