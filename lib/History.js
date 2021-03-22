
class History {
    constructor() {
        this.history = history.state;

        /* Set up history event handler. */
        $(window).on('popstate', (event) => {
            var state = event.originalEvent.state;
    
            if (state) {
                this.state = state.state;
                this.history = state.history;
                this.checkpointName = state.checkpointName;
                this.show(this.history[this.history.length - 1], true);
            } else if (this.history.length > 1) {
                this.state = {};
                this.history = [];
                this.checkpointName = '';
                this.show(this.startPassage, true);
            }
        });
  
        /* Set up hash change handler for save/restore. */
        $(window).on('hashchange', () => {
            this.restore(window.location.hash.replace('#', ''));
        });
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    pushState(state) {
        this.history.pushState(state, title, url)
    }

    /**
     * Sets the URL hash property to the hash value created by saveHash().
     *
     * @function save
     * @param {string} hash - Hash to set URL
     * @returns {void} - Returns nothing
     */
    save (hash) {
        window.location.hash = hash;

        /**
         * Triggered whenever story progress is saved.
         *
         * @event sm.story.saved
         */

        $.event.trigger('sm.story.saved');
    }
}

module.exports = History;
