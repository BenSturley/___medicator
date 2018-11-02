//
//  Medicate.js
//
class Medicate {
    constructor( 
        {  
            drug_name = '(medication)', 
            dose_size = '0 ml', 
            dose_datetime = new Date(), 
            notes = ''
        } = {} ) 
    {
        this._drug_name = drug_name;
        this._dose_size = dose_size;
        this._dose_datetime = dose_datetime;
        this._notes = notes;
        this._lastModified = new Date();
    }

    //
    // drug_name
    get drug_name() {
        return this._drug_name;
    }
    set drug_name(v) {
        this._drug_name = v;
    }

    //
    // dose_size
    get dose_size() {
        return this._dose_size;
    }
    set dose_size(v) {
        this._dose_size = v;
    }

    //
    // dose_datetime
    get dose_datetime() {
        return this._dose_datetime;
    }
    set dose_datetime(v) {
        this._dose_datetime = v;
    }

    //
    // notes
    get notes() {
        return this._notes;
    }
    set notes(v) {
        this._notes = v;
    }

    //
    // notes
    get lastModified() {
        return this._lastModified;
    }
    set lastModified(v) {
        this._lastModified = v;
    }


}