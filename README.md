# rent-a-stream

The functionality will allow someone to do the following activities:
- buy or rent movies
- view their bill
- pay their bill
- receive notifications when their bill is due, or overdue
- see the movies available to them, both
    - owned and
      -rented, with remaining days in rental
- fake "watch a movie"

*************
Types include:
- CustomerAccount (aggregate)
    - Bill (value type)
    - MoviePurchase (entity)
    - MovieRental (entity)
- BankAccount (aggregate)
- Transaction (value type)
- PaymentBillSaga
************
Pages:
- Page Views
    - Login page
        - Provide user name without password
    - Browse Movies page
        - Begin search for movies
        - See link to view your movies, both rented and purchased
        - See link to your account information
    - Search Results page
    - Movie Description page
    - "Your Movie Libary" page
    - Movie Viewer page, faked
    - Account Page
- All pages show
    - Nav bar with
        - Link to view your movies, both rented and purchased
        - Link to your account information
        - Link to browse for more movies
    - Messages section
