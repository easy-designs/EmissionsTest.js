/*------------------------------------------------------------------------------
Function:      EmmissionsTest.js
Author:        Aaron Gustafson (aaron at easy-designs dot net)
Creation Date: 2010-07-19
Version:       0.1
Homepage:      http://github.com/easy-designs/EmissionsTest.js
License:       MIT License (see homepage)
------------------------------------------------------------------------------*/
(function(w,d){

  var
  self  = 'EmissionsTest.js',
  map   = {},
  added = [];

  // gather info immediately
  for ( var attr in w )
  {
    map[attr] = '';
  }

  // trigger the timeout
  function init()
  {
    setTimeout( test, 2000 );
  }

  function test()
  {
    for ( var attr in w )
    {
      if ( !( attr in map ) )
      {
        added.push( attr );
      }
    }
    report();
  }

  function report()
  {
    var
    obj     = {},
    count   = added.length,
    summary = self + ' found ' + count + ' objects added to the global namespace',
    report  = w.console;
    if ( report )
    {
      report.log( summary );
      while ( count-- )
      {
        obj[added[count]] = w[added[count]];
      }
      report.log( obj );
    }
    else
    {
      report = d.createElement('p');
      report.style.background = '#fff';
      report.style.border     = '10px solid';
      report.style.color      = '#333';
      report.style.marginLeft = '-25%';
      report.style.padding    = '10px';
      report.style.position   = 'absolute';
      report.style.top        = '100px';
      report.style.zIndex     = '1000';
      report.style.left = report.style.width = '50%';
      report.innerHTML = summary + ':<br/>' + added.join(', ') + '.';
      d.body.appendChild( report );
    }
  }

  // on DOM ready
  (function(){
    var
    DCL          = 'DOMContentLoaded',
    ORC          = 'onreadystatechange',
    FALSE        = false,
    COMPLETE     = 'complete',
    __old_onload = w.onload,
    doScroll     = d.documentElement.doScroll;

    // for Mozilla/Safari/Opera9
  	if ( d.addEventListener )
    {
      d.addEventListener( DCL, function(){
        d.removeEventListener( DCL, arguments.callee, FALSE );
        init();
      }, FALSE );
    }
    // If IE event model is used
  	else if ( d.attachEvent )
  	{
  		// ensure firing before onload, maybe late but safe also for iframes
  		d.attachEvent( ORC, function(){
  			if ( d.readyState === COMPLETE ) {
  				d.detachEvent( ORC, arguments.callee );
  				init();
  			}
  		});

  		// If IE and not an iframe, continually check to see if the document is ready
  		if ( doScroll &&
  		     w == w.top )
  		{
  		  (function(){
  			  try {
      			// If IE is used, use the trick by Diego Perini
      			// http://javascript.nwbox.com/IEContentLoaded/
      			doScroll('left');
      		}
      		catch( error )
      		{
      			setTimeout( arguments.callee, 0 );
      			return;
      		}
          // and execute any waiting functions
  			  init();
  		  })();
  	  }
  	}
  })();

})(window,document);