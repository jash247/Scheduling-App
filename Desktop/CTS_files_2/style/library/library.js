import react, { component } from 'react';

import LibraryCourse from './libraryCourse';

class Library extends component {
    render() {
        return (
            <div className="library">
               <h1 className="library_title">Course Library</h1>
            <LibraryCourse/>
            <LibraryCourse/>
            <LibraryCourse/>          
            </div>
        )
    }
}

export default Library;