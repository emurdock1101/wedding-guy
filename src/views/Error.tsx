const ErrorPage: React.FC<{}> = () => {
  return (
    <section>
      <br />
      <blockquote>
        <p>There is nothing here</p>
        <p>No web page for this address</p>
        <p>404 Error</p>
        <pre>
          <pre>
            {`
       _____________
      (  return to  )
      ( J&E Wedding )
      (  homepage?  )
       -------------
             O
              O   ^__^
                o  (oo)\\_______
                   (__)\\       )\\/\\
                      ||----w |
                      ||     ||
      `}
            <a href='/'>home</a>
          </pre>
        </pre>
      </blockquote>
    </section>
  );
};

export default ErrorPage;
