Assignment 5: Add Offers with Grid Layout

### Add after search section:

html
<!-- Offers Section -->
<section class="offers-section">
    
    <h2>🎉 Best Offers for You</h2>
    
    <!-- Grid Container -->
    <div class="offers-grid">
        
        <!-- Offer Card 1 -->
        <div class="offer-card">
            <div class="offer-image">✈️</div>
            <h3>Flat 20% OFF</h3>
            <p>On Domestic Flights</p>
            <p class="code">Code: FLY20</p>
            <button>Book Now</button>
        </div>
        
        <!-- Offer Card 2 -->
        <div class="offer-card">
            <div class="offer-image">🏨</div>
            <h3>Upto 50% OFF</h3>
            <p>On Hotel Bookings</p>
            <p class="code">Code: HOTEL50</p>
            <button>Book Now</button>
        </div>
        
        <!-- Offer Card 3 -->
        <div class="offer-card">
            <div class="offer-image">🚂</div>
            <h3>Cashback ₹500</h3>
            <p>On Train Tickets</p>
            <p class="code">Code: TRAIN500</p>
            <button>Book Now</button>
        </div>
        
        <!-- Offer Card 4 -->
        <div class="offer-card">
            <div class="offer-image">🚗</div>
            <h3>Flat ₹300 OFF</h3>
            <p>On Cab Bookings</p>
            <p class="code">Code: CAB300</p>
            <button>Book Now</button>
        </div>
        
    </div>
    
</section>


### Add CSS for Grid:

css
/* Offers Section */
.offers-section {
    padding: 60px 20px;
    background: #f5f5f5;
}

.offers-section h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 32px;
    color: #333;
}

/* Grid Container - GRID LAYOUT! */
.offers-grid {
    display: grid;                      /* ← Magic line! */
    grid-template-columns: repeat(4, 1fr);  /* 4 equal columns */
    gap: 20px;                          /* Space between cards */
    max-width: 1200px;
    margin: 0 auto;
}

/*
VISUAL: How Grid Works

grid-template-columns: repeat(4, 1fr);
                         ↑       ↑
                    4 columns  Each takes
                              equal space (1 fraction)

Result:
┌──────┬──────┬──────┬──────┐
│ 1fr  │ 1fr  │ 1fr  │ 1fr  │
│Card 1│Card 2│Card 3│Card 4│
└──────┴──────┴──────┴──────┘

All equal width! ✅
*/

/* Offer Card */
.offer-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.offer-card:hover {
    transform: translateY(-5px);  /* Lift up on hover */
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.offer-image {
    font-size: 60px;
    margin-bottom: 15px;
}

.offer-card h3 {
    color: #ff6b35;
    margin-bottom: 10px;
    font-size: 24px;
}

.offer-card p {
    color: #666;
    margin-bottom: 10px;
}

.code {
    background: #fff3e0;
    color: #ff6b35;
    padding: 5px 15px;
    border-radius: 20px;
    display: inline-block;
    font-weight: bold;
    margin: 10px 0;
}

.offer-card button {
    background: #667eea;
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

.offer-card button:hover {
    background: #5568d3;
}


### What You See:


┌────────────────────────────────────────────────┐
│           Best Offers for You               │
├───────┬───────┬───────┬───────────────────────┤
│  ✈️   │  🏨   │  🚂   │     🚗                │
│ 20%   │ 50%   │ ₹500  │    ₹300               │
│ OFF   │ OFF   │ Back  │    OFF                │
│[Book] │[Book] │[Book] │   [Book]              │
└───────┴───────┴───────┴───────────────────────┘

Perfect GRID! 4 equal columns!