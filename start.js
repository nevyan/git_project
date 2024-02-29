    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track housingLocation) {
        <app-housing-location
          [housingLocation]="housingLocation">
        </app-housing-location>
      }
    </section >

  <section>
    Patched information
  </section>
