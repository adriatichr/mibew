/**
 * @preserve Copyright 2005-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t,r){e.Views.RefreshControl=e.Views.Control.extend({template:t.templates["chat/controls/refresh"],events:r.extend({},e.Views.Control.prototype.events,{click:"refresh"}),refresh:function(){this.model.refresh()}})}(Mibew,Handlebars,_);