<div id='validator'>
  <form action='' method='post'>
    <input type='hidden' name='_csrf' value='{{csrfToken}}'>
    <textarea placeholder='Paste in your assertion here' name='assertion'>{{assertion}}</textarea>
    <div class='submit'>
      <input type='submit' class='primary large btn' value='Check your assertion'>
    </div>
  </form>
  
  <div id='results'>
    {{#submitted}}
      {{#success}}
        <h2>Everything looks good!</h2>
      {{/success}}

      {{^success}}
        <h2>There were problems with the following fields:</h2>
        <ul>
          {{#errors}}
            <li><strong>{{field}}</strong>: {{{value}}}</li>
          {{/errors}}
        </ul>
      {{/success}}

    {{/submitted}}
  </div>
</div>
